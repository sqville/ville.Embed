/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBulletListSquareSparkle",
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

   var pathdregular = "m13.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM16 11.91c.16.06.33.09.5.09.17 0 .34-.02.5-.08v2.33A2.75 2.75 0 0 1 14.25 17h-8.5A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3h3.34a1.42 1.42 0 0 0 0 1H5.75C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75V11.9ZM12.14 7l.01.05c.1.25.25.48.52.7.14.1.3.16.45.2L13.1 8H9.5a.5.5 0 0 1 0-1h2.64ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "m13.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02Zm-3.02 3.56a1.4 1.4 0 0 1-.48-.62l-.26-.8a.52.52 0 0 0-.14-.22.64.64 0 0 0-.22-.14l-.77-.25c-.27-.1-.49-.26-.65-.48A1.31 1.31 0 0 1 13.1 8H9.5a.5.5 0 0 1 0-1h2.64l-.35-1.04a1.27 1.27 0 0 0-.29-.47 1.3 1.3 0 0 0-.47-.3l-1.06-.34A1.41 1.41 0 0 1 9 3.5c0-.18.03-.34.09-.5H5.75A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17h8.5A2.75 2.75 0 0 0 17 14.25v-2.33c-.16.06-.33.08-.5.08-.27 0-.53-.08-.74-.23ZM7.5 7.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 9.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 3.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4Z";
   
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