/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MegaphoneOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L5.48 6.2l-2.37.63A1.5 1.5 0 0 0 2 8.27v2.5c0 .65.41 1.23 1.03 1.43l1.97.66v.89a3.25 3.25 0 0 0 6.27 1.2l4.46 1.49 1.42 1.41a.5.5 0 0 0 .7-.7l-15-15Zm11.3 12.7-10.8-3.6a.5.5 0 0 1-.35-.47V8.27a.5.5 0 0 1 .37-.48L6.3 7l7.85 7.86Zm-3.83-.22A2.25 2.25 0 0 1 6 13.75v-.56l4.32 1.44ZM17 4.8v10.08l.86.86c.1-.19.14-.4.14-.63V4.81c0-1-.93-1.71-1.89-1.46L7.71 5.6l.82.82 7.84-2.1a.5.5 0 0 1 .63.5Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L5.48 6.2l-2.37.63A1.5 1.5 0 0 0 2 8.27v2.5c0 .65.41 1.23 1.03 1.43l1.97.66v.89a3.25 3.25 0 0 0 6.27 1.2l4.46 1.49 1.42 1.41a.5.5 0 0 0 .7-.7l-15-15ZM6 13.19l4.32 1.44A2.25 2.25 0 0 1 6 13.75v-.56Zm12 1.92c0 .23-.05.44-.14.63L7.71 5.6l8.4-2.24A1.5 1.5 0 0 1 18 4.8v10.31Z";
   
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