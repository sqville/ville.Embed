/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Eyedropper",
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

   var pathdregular = "M17.25 2.75a2.62 2.62 0 0 0-3.71 0L12.5 3.8l-.35-.35a1.5 1.5 0 0 0-2.12 0l-.59.59a1.5 1.5 0 0 0 0 2.12l.35.35-6.35 6.35A1.5 1.5 0 0 0 3 13.91v.5l-.96 2.26a1 1 0 0 0 1.32 1.31L5.6 17h.49c.4 0 .78-.16 1.06-.44l6.35-6.35.35.35a1.5 1.5 0 0 0 2.12 0l.59-.58a1.5 1.5 0 0 0 0-2.13l-.35-.35 1.04-1.04a2.62 2.62 0 0 0 0-3.7Zm-3 .71a1.62 1.62 0 0 1 2.29 2.3l-1.4 1.39a.5.5 0 0 0 0 .7l.71.71c.2.2.2.51 0 .7l-.58.6a.5.5 0 0 1-.71 0l-4.41-4.42a.5.5 0 0 1 0-.7l.58-.59c.2-.2.52-.2.71 0l.7.7a.5.5 0 0 0 .71 0l1.4-1.39ZM12.79 9.5l-6.35 6.35a.5.5 0 0 1-.35.15H5.5a.5.5 0 0 0-.2.04l-2.34 1.03 1-2.36a.5.5 0 0 0 .04-.2v-.6a.5.5 0 0 1 .15-.35l6.35-6.35 2.3 2.3Z";
   var pathdfilled = "M17.25 2.75a2.62 2.62 0 0 0-3.71 0L12.5 3.8l-.35-.35a1.5 1.5 0 0 0-2.12 0l-.59.59a1.5 1.5 0 0 0 0 2.12l.35.35-6.35 6.35A1.5 1.5 0 0 0 3 13.91v.5l-.96 2.26a1 1 0 0 0 1.32 1.31L5.6 17h.49c.4 0 .78-.16 1.06-.44l6.35-6.35.35.35a1.5 1.5 0 0 0 2.12 0l.59-.58a1.5 1.5 0 0 0 0-2.13l-.35-.35 1.04-1.04a2.62 2.62 0 0 0 0-3.7ZM10.5 7.21l2.3 2.3-6.36 6.34a.5.5 0 0 1-.35.15H5.5a.5.5 0 0 0-.2.04l-2.34 1.03 1-2.36a.5.5 0 0 0 .04-.2v-.6a.5.5 0 0 1 .15-.35l6.35-6.35Z";
   
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