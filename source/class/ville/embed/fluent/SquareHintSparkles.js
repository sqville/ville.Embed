/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SquareHintSparkles",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "m14.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM10 3.5c0-.17.04-.34.1-.5H9a.5.5 0 0 0 0 1h1.1c-.06-.16-.1-.33-.1-.5ZM5.5 3a.5.5 0 0 1 0 1C4.67 4 4 4.67 4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3ZM14 16.5c0 .28.22.5.5.5a2.5 2.5 0 0 0 2.5-2.5.5.5 0 0 0-1 0c0 .83-.67 1.5-1.5 1.5a.5.5 0 0 0-.5.5Zm-11-2a.5.5 0 0 1 1 0c0 .83.67 1.5 1.5 1.5a.5.5 0 0 1 0 1A2.5 2.5 0 0 1 3 14.5Zm.5-6A.5.5 0 0 0 3 9v2a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5Zm5 8c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "m14.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM10 3.5c0-.17.04-.34.1-.5h-.85a.75.75 0 0 0 0 1.5h1.18a1.43 1.43 0 0 1-.43-1Zm-6.25 8a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75Zm5.5 4a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM5.25 3a.75.75 0 0 1 0 1.5.75.75 0 0 0-.75.75.75.75 0 0 1-1.5 0C3 4.01 4 3 5.25 3ZM6 16.25c0 .41-.34.75-.75.75C4.01 17 3 16 3 14.75a.75.75 0 0 1 1.5 0c0 .41.34.75.75.75s.75.34.75.75Zm8 0c0 .41.34.75.75.75 1.24 0 2.25-1 2.25-2.25a.75.75 0 0 0-1.5 0c0 .41-.34.75-.75.75a.75.75 0 0 0-.75.75Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});