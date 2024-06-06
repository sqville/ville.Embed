/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTrendingSparkle",
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

   var pathdregular = "m5.88 2.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4L5.9 8.72a.42.42 0 0 1-.8 0l-.35-1.07a2.2 2.2 0 0 0-1.4-1.4L2.28 5.9a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0ZM17 6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.8L11 11.3 9.35 9.64a.5.5 0 0 0-.7 0l-5.5 5.5a.5.5 0 0 0 .7.7L9 10.71l1.65 1.64a.5.5 0 0 0 .7 0L16 7.71v2.79a.5.5 0 0 0 1 0v-4Zm-.98 8.46.76.25h.02a.3.3 0 0 1 .14.47.3.3 0 0 1-.14.1l-.77.26a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.57 1.57 0 0 0-1-1l-.77-.25a.3.3 0 0 1-.14-.46.3.3 0 0 1 .14-.1l.77-.26a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.58 1.58 0 0 0 1 1Z";
   var pathdfilled = "m5.88 2.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4L5.9 8.72a.42.42 0 0 1-.8 0l-.35-1.07a2.2 2.2 0 0 0-1.4-1.4L2.28 5.9a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0ZM16.75 6a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V8.56l-4.22 4.22c-.3.3-.77.3-1.06 0L9 11.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25c.3-.3.77-.3 1.06 0l1.72 1.72 3.69-3.69h-2.69a.75.75 0 0 1 0-1.5h4.5Zm-.73 8.96.76.25h.02a.3.3 0 0 1 .14.47.3.3 0 0 1-.14.1l-.77.26a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.57 1.57 0 0 0-1-1l-.77-.25a.3.3 0 0 1-.14-.46.3.3 0 0 1 .14-.1l.77-.26a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.58 1.58 0 0 0 1 1Z";
   
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