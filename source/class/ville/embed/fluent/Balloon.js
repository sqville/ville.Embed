/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Balloon",
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

   var pathdregular = "M10 4.43a.5.5 0 0 1 .57-.43 2.86 2.86 0 0 1 2.42 2.43.5.5 0 0 1-.99.14A1.86 1.86 0 0 0 10.43 5a.5.5 0 0 1-.43-.57ZM5 7a5 5 0 0 1 10 0c0 1.87-.66 3.6-1.6 4.86a5.06 5.06 0 0 1-2.9 2.1V14a1 1 0 0 0 1 1H14a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V17a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-.05a5.06 5.06 0 0 1-2.9-2.09C5.66 10.6 5 8.86 5 7Zm5-4a4 4 0 0 0-4 4c0 1.64.59 3.16 1.4 4.27C8.24 12.4 9.23 13 10 13s1.76-.6 2.6-1.73A7.31 7.31 0 0 0 14 7a4 4 0 0 0-4-4Z";
   var pathdfilled = "M5 7a5 5 0 0 1 10 0c0 1.87-.66 3.6-1.6 4.86a5.06 5.06 0 0 1-2.9 2.1V14a1 1 0 0 0 1 1H14a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V17a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-.05a5.06 5.06 0 0 1-2.9-2.09C5.66 10.6 5 8.86 5 7Zm5.57-3a.5.5 0 1 0-.14 1c.81.11 1.46.76 1.57 1.57a.5.5 0 0 0 1-.14A2.86 2.86 0 0 0 10.56 4Z";
   
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